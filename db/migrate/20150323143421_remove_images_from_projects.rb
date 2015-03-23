class RemoveImagesFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :images, :string
  end
end
