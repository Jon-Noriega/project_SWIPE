class UsersController < ApplicationController

    def index
        @users = User.all

        render json: @users, include: [:friends]
    end

    def show
        @user = User.find(params[:id])

        render json: @user, include: [:friends]
    end

    def create
        @user = User.new(user_params)

        if @user.valid?
            @user.save
            @token = JWT.encode({ user_id: @user.id }, "ocean")
            render json: {user: @user, token: @token}, status: :created
        else
            render json: {error: @user.errors.full_messages}, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :photo, :description, :project, :userType, :username, :password)
    end

    # def create
    #     @user = User.create(
    #         name: params[:name],
    #         photo: params[:photo],
    #         description: params[:description],
    #         project: params[:project],
    #         userType: params[:userType],
    #         username: params[:username],
    #         password: params[:password]
    #     )

    #     render json: @user
    # end

end
