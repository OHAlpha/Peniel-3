class CreateContactUsPhoneNumbers < ActiveRecord::Migration
  def change
    create_table :contact_us_phone_numbers do |t|
      t.integer :area_code
      t.integer :central_office_code
      t.integer :station_code

      t.timestamps null: false
    end
  end
end
