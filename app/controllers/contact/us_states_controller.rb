class Contact::UsStatesController < ApplicationController
  def index
    @states = Contact::UsState.all
  end
end
