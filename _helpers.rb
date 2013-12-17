class EmailTemplateHelpers < Middleman::Extension
	def initialize(app, options_hash={}, &block)
		super
		@@app = app
		app.set :contentAreaCounter, 0
	end

	helpers do	  
	  def content_area(area, parameters = {})
	    @@app.set :contentAreaCounter, contentAreaCounter + 1
	    if ( is_building == true )
	      concat '<custom type="content" name="contentarea' + contentAreaCounter.to_s + '">'
	    else
	      if ( add_regions && add_regions == true )
	        region(area) do
	          concat partial("content/" + area, { :locals => parameters })
	        end
	      else
	        concat partial("content/" + area, { :locals => parameters })
	      end
	    end
	  end

	  def page_data(ns, var)
	    return is_building == true ? "%%=v(@" + ns.to_s + "_" + var.to_s + ")=%%" : data.template[ns][var]
	  end

	  def page_link(ns, var)
	    return is_building == true ? "%%=redirectto(@" + ns.to_s + "_" + var.to_s + ")=%%" : data.template[ns][var]
	  end

	  def page_link_format ns, var
	    alias_var = var.to_s + "_alias"
	    
	    if ( data.template[ns][alias_var].nil? || data.template[ns][alias_var].empty? )
	      raise "Variable " + ns.to_s + " => " + var.to_s + " needs an alias"
	    end
	    
	    if ( is_building == true )
	      return "href=\"%%=redirectto(@" + ns.to_s + "_" + var.to_s + ")=%%\" alias=\"%%=redirectto(@" + ns.to_s + "_" + alias_var + ")=%%\""
	    else
	      return "href=\"" + data.template[ns][var] + "\" alias=\"" + data.template[ns][alias_var] + "\""
	    end
	  end

	  def image_src filename
	    return images_dir + "/" + filename
	  end

	  def region regionName, force=false
	    if ( is_building == true || force == true )
	      concat "%%=BeginImpressionRegion(\"" + regionName + "\")=%%"
	      yield
	      concat "%%=EndImpressionRegion()=%%"
	    else
	      yield 
	    end
	  end

	end
end

::Middleman::Extensions.register(:email_template_helpers, EmailTemplateHelpers)