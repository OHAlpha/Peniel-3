class AboutController < ApplicationController
  def index
    @title = @title + ' - About'
  end

  def peniel
    @title = @title + ' - About Peniel'
  end

  def adventism
    @title = @title + ' - About Adventism'
  end

  def christianity
    @title = @title + ' - About Christianity'
  end
end
