class CreatePageTags < ActiveRecord::Migration
  def change
    create_table :page_tags do |t|
      t.string :tag
      t.string :url

      t.timestamps null: false
    end
  end
end
