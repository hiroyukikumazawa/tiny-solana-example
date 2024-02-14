use anchor_lang::prelude::*;

declare_id!("8YQ15XxAekDQ2xtD7sYdmMzWne3XiDWm6JfhMRC2PmPg");

#[program]
pub mod tiny_adventure {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.new_game_data_account.player_position = 0;
        msg!("A Journey Begins!");
        msg!("o.......");
        Ok(())
    }

    pub fn initialize_config_account(ctx: Context<InitializeConfigAccount>, authority: Pubkey) -> Result<()> {
        let new_config_account = &mut ctx.accounts.new_config_account;
        new_config_account.authority = authority;
        new_config_account.last_book_id = 0;
        msg!("new config");
        Ok(())
    }

    pub fn move_left(ctx: Context<MoveLeft>) -> Result<()> {
        let game_data_account = &mut ctx.accounts.game_data_account;
        if game_data_account.player_position == 0 {
            msg!("You are back at the start.");
        } else {
            game_data_account.player_position -= 1;
            print_player(game_data_account.player_position);
        }
        Ok(())
    }

    pub fn move_right(ctx: Context<MoveRight>) -> Result<()> {
        let game_data_account = &mut ctx.accounts.game_data_account;
        if game_data_account.player_position == 3 {
            msg!("You have reached the end! Super!");
        } else {
            game_data_account.player_position = game_data_account.player_position + 1;
            print_player(game_data_account.player_position);
        }
        Ok(())
    }
}

fn print_player(player_position: u8) {
    if player_position == 0 {
        msg!("A Journey Begins!");
        msg!("o.......");
    } else if player_position == 1 {
        msg!("..o.....");
    } else if player_position == 2 {
        msg!("....o...");
    } else if player_position == 3 {
        msg!("........\\o/");
        msg!("You have reached the end! Super!");
    }
}

#[derive(Accounts)]
pub struct CreateBook<'info> {
    #[account(
        init,
        payer = signer,
        seeds = [
            b"book",
            signer.key().as_ref(),
            config_account.last_book_id.to_le_bytes().as_ref()
        ],
        bump,
        space = 8 + 32 + 8 // adjust according to the actual size needed
    )]
    pub book_account: Box<Account<'info, BookAccount>>,
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        mut,
        seeds = [b"config", config_account.authority.key().as_ref()],
        bump = config_account.bump
    )]
    pub config_account: Box<Account<'info, ConfigAccount>>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct BookAccount {
    pub seller: Pubkey,
    pub sell_amount: u64,
}

#[account]
pub struct ConfigAccount {
    pub bump: u8,
    pub authority: Pubkey,
    pub last_book_id: u64,
}

#[derive(Accounts)]
pub struct InitializeConfigAccount<'info> {
    #[account(
        init,
        seeds = [b"init-config"],
        bump,
        payer = signer,
        space = 8 + 1 + 32 + 8
    )]
    pub new_config_account: Account<'info, ConfigAccount>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        seeds = [b"level1"],
        bump,
        payer = signer,
        space = 8 + 1
    )]
    pub new_game_data_account: Account<'info, GameDataAccount>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct MoveLeft<'info> {
    #[account(mut)]
    pub game_data_account: Account<'info, GameDataAccount>,
}

#[derive(Accounts)]
pub struct MoveRight<'info> {
    #[account(mut)]
    pub game_data_account: Account<'info, GameDataAccount>,
}

#[account]
pub struct GameDataAccount {
    player_position: u8,
}
