DEPLOY_DIR = '~/_Sandbox/DigitalDirect/Client/Project'
PREVIEW_DIR = 'preview'

desc "Build the email from source"
task :build do
	puts "## Building email"
	status = system("middleman build --clean")
	puts status ? "OK" : "FAILED"
end

desc "Build from source in readable format with sample data"
task :build_preview do
	puts "## Building email preview"
	ENV["BUILD_TYPE"] = 'preview'
	status = system("middleman build --clean")
	puts status ? "OK" : "FAILED"
end

desc "Deploy email via robocopy or rsync"
task :deploy, :os do |t, args|
os = args[:os] || 'nix'
if os == 'win'
status = system("robocopy #{PREVIEW_DIR} #{DEPLOY_DIR} /Z /E")
else
status = system("sudo rsync -avz --no-perms #{PREVIEW_DIR}/ #{DEPLOY_DIR}")
end
end

task :build_all => [:build, :sandbox] do
end

desc "Run the server at http://localhost:4567"
task :server do
  system("middleman server")
end

desc "Build and deploy email to the sandbox"
task :sandbox => [:build_preview, :deploy] do
end

desc "Build and deploy email to the sandbox"
task :build_images do
	status = system("middleman build --glob=images/*")
end

desc "Zip up image assets"
task :zip => [:build_images] do
	require 'zip'
	directory = "build/images/"
	zipfile_name = "build/images.zip"

	Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
	  Dir[File.join(directory, '**', '**')].each do |file|
	    zipfile.add(file.sub(directory, ''), file)
	  end
	end

end

desc "Send html email from preview by filename"
# ~/.bashrc
# export TEST_SEND_EMAILS=...
# export GMAIL_USERNAME=...
# export GMAIL_PASSWORD=...
task :mail, :filename do |t, args|
	require 'mail'

	filename = args[:filename] || 'index.html'
	sendTo = ENV["TEST_SEND_EMAILS"]
	username = ENV["GMAIL_USERNAME"]
	password = ENV["GMAIL_PASSWORD"]

	mail = Mail.new do
	  from     'MM Test Email'
	  to       sendTo
	  subject  '-- TEST EMAIL -- [' + filename + ']'
	  content_type 'text/html; charset=UTF-8'
	  body     File.read(PREVIEW_DIR + "/" + filename)
	end

	mail.delivery_method :smtp,
	 					 :address    => "smtp.gmail.com",
                         :port       => 587,
                         :user_name  => username,
                         :password   => password,
                         :enable_ssl => true

	mail.deliver

end