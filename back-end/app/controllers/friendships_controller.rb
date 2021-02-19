class FriendshipsController < ApplicationController

    def show
    @friendship = Friendship.find(params[:id])

    render json: @friendship
    end
    
    def index
        @friendships = Friendship.all

        render json: @friendships, include: [:friend]
    end
    
    def create
        Friendship.create(
            user_id: params[:user_id],
            friend_id: params[:friend_id]
        )

        # Friendship.create(
        #     user_id: params[:user_id],
        #     friend_id: params[:friend_id]
        # )

        # Friendship.create(
        #     user_id: params[:friend_id],
        #     friend_id: params[:user_id]
        # )
    
        redirect_to users_path
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        @friendship.destroy

        render json: {"message": "Removed from Favorites."}
    end
    
end
