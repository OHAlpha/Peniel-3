class NavigationController < ApplicationController
  
  def set_title
    @title = "Peniel SDA"
    @banner_text = 'Peniel SDA - Navigation'
  end
  
  def home
    @banner_text = 'Welcome To Peniel'
  end
  
  def index
    @title = @title + ' - Navigation'
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