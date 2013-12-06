require 'zip'

compass_config do |config|
  config.output_style = :compressed
  config.line_comments = false
end

class ZipImages < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super
    app.after_build do |builder|
      directory = build_dir + "/images/"
      zipfile_name = build_dir + "/images.zip"
      
      Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
          Dir[File.join(directory, '**', '**')].each do |file|
            zipfile.add(file.sub(directory, ''), file)
          end
      end
    end
  end
end

set :css_dir, 'stylesheets'
set :images_dir, 'images'
#set :build_dir, 'B:/SetDirectory'
set :is_building, false
set :et_content_dir, "Content\\"
set :add_regions, false

configure :build do
  activate :minify_css
  activate :relative_assets
  # activate :zip_images
  set :is_building, true
end

helpers do
  set :contentAreaCounter, 0
  def content_area(area)
    set :contentAreaCounter, contentAreaCounter + 1
    if ( is_building == true )
      concat '<custom type="content" name="contentarea' + contentAreaCounter.to_s + '">'
    else
      if ( add_regions && add_regions == true )
        region(area) do
          concat partial("content/" + area)
        end
      else
        concat partial("content/" + area)
      end
    end
  end
  def page_data(ns, var)
    concat is_building == true ? "%%=v(@" + ns + "_" + var + ")=%%" : data.template[ns][var]
  end
  def page_link(ns, var)
    concat is_building == true ? "%%=redirectto(@" + ns + "_" + var + ")=%%" : data.template[ns][var]
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