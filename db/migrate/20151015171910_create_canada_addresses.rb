class CreateCanadaAddresses < ActiveRecord::Migration
  def change
    create_table :contact_canada_addresses do |t|
      t.string :apt
      t.string :house
      t.string :street, index: true
      t.belongs_to :canada_city, index: true, foreign_key: true
      t.string :canada_city_name, index: true
      t.belongs_to :canada_province, index: true, foreign_key: true
      t.string :canada_province_name, index: true
      t.string :postal_code, index: true

      t.timestamps null: false
    end
  end
end
