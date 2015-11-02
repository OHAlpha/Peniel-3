class CreateCanadaProvinces < ActiveRecord::Migration
  def change
    create_table :contact_canada_provinces do |t|
      t.string :name
      t.string :code

      t.timestamps null: false
    end
  end
end
