class Contact::CanadaProvince < ActiveRecord::Base
  has_many :canada_cities
end