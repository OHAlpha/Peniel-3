class CreateCanadaCities < ActiveRecord::Migration
  def change
    create_table :contact_canada_cities do |t|
      t.string :name
      t.integer :canada_state_id

      t.timestamps null: false
    end
    add_foreign_key :canada_cities, :canada_states
  end
end
