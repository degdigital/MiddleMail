compass_config do |config|
  config.output_style = :compressed
  config.line_comments = false
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
#set :build_dir, 'A:\gopro'
set :is_building, false
set :et_content_dir, "Shared Items\\Shared Contents\\Responsive Template\\Content\\"

configure :build do
  activate :minify_css
  activate :relative_assets
  set :is_building, false
end

helpers do
  def content_area(area)
    concat is_building == true ? '<custom type="content" name="' + area + '">' : partial("content/" + area)
  end
  def page_data(ns, var)
    concat is_building == true ? "%%=v(@" + ns + "_" + var + ")=%%" : data.template[ns][var]
  end
  def page_link(ns, var)
    concat is_building == true ? "%%=redirectto(@" + ns + "_" + var + ")=%%" : data.template[ns][var]
  end
end