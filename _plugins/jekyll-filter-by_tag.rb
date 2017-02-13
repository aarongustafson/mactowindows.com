module Jekyll
  module TagFilter
    def by_tag(collection, tag)
      if !collection.kind_of?(Array)
        raise TypeError, "You can only use this filter on an Array"
      end
      collection.keep_if { |item|
        if item['tags'].kind_of?(String) && item['tags'] == '*'
          true
        elsif  item['tags'].kind_of?(Array) && item['tags'].include?(tag)
          true
        else
          false
        end
      }
    end
  end
end

Liquid::Template.register_filter(Jekyll::TagFilter)