class Contact::Address < ActiveRecord::Base
  belongs_to :country
  
  def getAddress
    cnt = country
    if cnt.nil?
      return address_text
    elsif cnt == Contact::Country.where(alpha_2: 'US').first.id
      return Contact::UsAddress.find(address)
    end
  end
end
