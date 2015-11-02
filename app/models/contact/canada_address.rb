class Contact::CanadaAddress < ActiveRecord::Base
  belongs_to :canada_city
  belongs_to :canada_province
end