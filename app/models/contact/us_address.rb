class Contact::UsAddress < ActiveRecord::Base
  belongs_to :us_city
  belongs_to :us_state
end
