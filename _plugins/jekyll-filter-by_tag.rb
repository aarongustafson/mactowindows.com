module Jekyll
  module TagFilter
    def by_tag(collection, tag)
      new_collection = []
      if !collection.kind_of?(Array)
        raise TypeError, "You can only use this filter on an Array"
      end
      # puts tag
      if tag
        collection.each do |item|
          # puts item['tags'].inspect
          if ( item['tags'].kind_of?(String) && item['tags'] == '*' ) ||
             ( item['tags'].kind_of?(Array) && item['tags'].include?(tag) )
            # puts "match found for #{tag}"
            new_collection << item
          end
        end
      end
      # puts new_collection.inspect
      return new_collection
    end
  end
end

Liquid::Template.register_filter(Jekyll::TagFilter)