class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_title
  
  def set_title
    @title = "Peniel SDA"
    @banner_text = 'Welcome To Peniel'
  end
  
  private
    def renderALS
      render params['action']+"_"+params['style'], layout: "application_"+params['layout']
    end
    def renderAL
      render layout: "application_"+params['layout']
    end
    def renderAS
      render params['action']+"_"+params['style']
    end
end