class NavigationController < ApplicationController
  def home
  end

  def search
    @title = @title + ' - Search'
  end

  def sitemap
    @title = @title + ' - Site Map'
  end

  def popular
    @title = @title + ' - Popular Pages'
  end
end