class EmailTemplateHelpers < Middleman::Extension
	def initialize(app, options_hash={}, &block)
		super
		@@app = app
		app.set :contentAreaCounter, 0
	end

	helpers do

	  def getvar ns, var
		return data.template[ns][var]
	  end

	  def content_area(area = "", parameters = {})
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

	  def empty_content_area
	  	@@app.set :contentAreaCounter, contentAreaCounter + 1
	    if ( is_building == true )
	      concat '<custom type="content" name="contentarea' + contentAreaCounter.to_s + '">'
	    end
	  end

	  def page_data ns, var
	    return is_building == true ? "%%=v(@" + ns.to_s + "_" + var.to_s + ")=%%" : getvar(ns, var)
	  end

	  def page_link ns, var
	    return is_building == true ? "%%=redirectto(@" + ns.to_s + "_" + var.to_s + ")=%%" : getvar(ns, var)
	  end

	  def page_link_format ns, var
	    alias_var = var.to_s + "_alias"

	    if ( getvar(ns, alias_var).nil? || getvar(ns, alias_var).empty? )
	      raise "Variable " + ns.to_s + " => " + var.to_s + " needs an alias"
	    end

	    if ( is_building == true )
	      return "href=\"%%=redirectto(@" + ns.to_s + "_" + var.to_s + ")=%%\" alias=\"%%=redirectto(@" + ns.to_s + "_" + alias_var + ")=%%\""
	    else
	      return "href=\"" + getvar(ns, var) + "\" alias=\"" + getvar(ns, alias_var) + "\""
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

	  def if_page_data ns, var
	  	if ( is_building == true )
	  		concat "%%[if not empty(@" + ns.to_s + "_" + var.to_s + ") then]%%"
	  		yield
	  		concat "%%[endif]%%"
	  	else
	  		if ( getvar(ns, var) )
	  			yield
	  		end
	  	end
	  end
	  
	  def embed_stylesheet( name )
	    content_tag :style, 'data-ignore' => "ignore" do
	      sprockets[ "#{name}.css" ].to_s
	    end
	  end
	 
	  
	  def inline_stylesheet( name )
	    content_tag :style do
	      sprockets[ "#{name}.css" ].to_s
	    end
	  end

	end
end

::Middleman::Extensions.register(:email_template_helpers, EmailTemplateHelpers)