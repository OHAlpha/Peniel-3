class Contact::CountriesController < ApplicationController
  def index
    @countries = Contact::Country.all
  end
end
