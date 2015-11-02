class Contact::CanadaProvincesController < ApplicationController
  def index
    @provinces = Contact::CanadaProvince.all
  end
end
