class CreateContactCountries < ActiveRecord::Migration
  def change
    create_table :contact_countries do |t|
      t.string :name, null: false, unique: true
      t.string :alpha_2, unique: true
      t.string :alpha_3, unique: true
      t.integer :numeric, unique: true

      t.timestamps null: false
    end
  end
end
