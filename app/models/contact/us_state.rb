class Contact::UsState < ActiveRecord::Base
  has_many :us_cities
end
