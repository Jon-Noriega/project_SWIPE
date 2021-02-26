class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def index
        @users = User.all

        render json: @users, include: {friendships: {include: :friend, only: :id}}
    end

    def show
        @user = User.find(params[:id])

        render json: @user, include: {friendships: {include: :friend, only: :id}}
    end

    def profile
        render json: {user: current_user, friendships: current_user.friends}
    end

    def create
        @user = User.new(user_params)

        if @user.valid?
            @user.save
            @token = JWT.encode({ user_id: @user.id }, Rails.application.secret_key_base)
            render json: {user: @user, friendships: @user.friends, token: @token}, status: :created
        else
            render json: {errors: @user.errors.full_messages}, status: :not_acceptable
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy

        render json: {"message": "Account deleted."}
    end

    private

    def user_params
        params.require(:user).permit(:name, :photo, :description, :project, :userType, :username, :password)
    end

end
