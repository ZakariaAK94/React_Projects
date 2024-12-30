import chefClaudeIcon from "../assets/images/chef-claude-icon.png"

export default function Header()
{
    return (
        <header>            
           <img src={chefClaudeIcon} alt="icon-chef-claude" />
           <h1>Chef Claude</h1>
        </header>
    )
}