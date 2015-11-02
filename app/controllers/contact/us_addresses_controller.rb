class Contact::UsAddressesController < ApplicationController
  def index
    @addresses = Contact::UsAddress.all
  end
end
