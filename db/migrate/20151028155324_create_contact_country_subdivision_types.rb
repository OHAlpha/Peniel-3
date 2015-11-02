class CreateContactCountrySubdivisionTypes < ActiveRecord::Migration
  def change
    create_table :contact_country_subdivision_types do |t|
      t.string :name, unique: true

      t.timestamps null: false
    end
  end
end
