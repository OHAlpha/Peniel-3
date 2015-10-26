class CreateCanadaAddresses < ActiveRecord::Migration
  def change
    create_table :contact_canada_addresses do |t|
      t.string :apt
      t.string :house
      t.string :street
      t.belongs_to :canada_city, index: true
      t.string :cityname
      t.belongs_to :canada_province, index: true
      t.string :zipcode

      t.timestamps null: false
    end
  end
end
