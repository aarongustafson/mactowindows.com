source_dir = File.expand_path('../../../', __FILE__)
deploy_dir = File.expand_path('../../../_site', __FILE__)

desc "Publishing to mactowindows.com"
task :publish do
  puts "## Building mactowindows.com\n"
  puts "## Step 1: Pulling updates\n"
  cd "#{source_dir}" do 
    system "git pull"
  end
  puts "## Step 2: Building the site\n"
  system "bundle exec jekyll build"
  puts "## Step 3: Publishing\n"
  cd "#{deploy_dir}" do
    system "git add -A"
    message = "Site built at #{Time.now.utc}"
    puts "\n## Committing"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing"
    system "git push origin gh-pages"
    puts "\n## Published"
  end
end