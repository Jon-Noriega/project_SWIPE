class UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users, include: [:friends]
    end

    def create
        @user = User.create(
            name: params[:name],
            photo: params[:photo],
            description: params[:description],
            project: params[:project],
            userType: params[:userType],
            username: params[:username]
        )

        render json: @user
    end

end
