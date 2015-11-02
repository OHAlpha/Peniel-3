class Contact::CountrySubdivision < ActiveRecord::Base
  belongs_to :country
  belongs_to :country_subdivision_type
end
