require "rubygems"

desc "list tasks"
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end

############################
# Custom in ./tasks/rake/  #
############################
Dir.glob('_tasks/rake/*.rake').each { |r| load r}