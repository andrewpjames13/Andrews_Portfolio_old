class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :short_description
      t.string :long_description
      t.binary :hero_image

      t.timestamps null: false
    end
  end
end
