# frozen_string_literal: true

source "https://rubygems.org"

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

# gem "rails"
gem 'jekyll'
gem 'github-pages', versions['github-pages']
gem 'rake'

group :jekyll_plugins do
    gem 'jekyll-paginate'
    gem 'liquid-c'
    gem 'jekyll-sitemap'
    gem 'jekyll-feed'
    gem 'jekyll-seo-tag'
    gem 'jekyll-admin'
end
