module Jekyll

  class SectionPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'section.html')
      self.data['title'] = "#{tag['title']}"
    end
  end

  class SectionPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'section'
        dir = ''
		site.data['tags'].each do |tag|
          site.pages << SectionPage.new(site, site.source, File.join(dir, tag['slug']), tag)
        end
      end
    end
  end

end