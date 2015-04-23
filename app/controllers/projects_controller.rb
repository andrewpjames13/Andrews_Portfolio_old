class ProjectsController < ApplicationController

  # only allow users who aren't logged in to use the show actions
  # before_action :authenticate, except: [:show]

  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  def show
    # @project = Project.find(params[:id])
    # @imgs = Project.new
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
    redirect_to projects_path
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :short_description, :long_description, :image, :images)
  end

end
