class Contact::UsCitiesController < ApplicationController
  def index
    @cities = Contact::UsCity.all
  end
end
