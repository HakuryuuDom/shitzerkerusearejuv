const Command = require('Command'),
		GameState = require('tera-game-state')
module.exports = function unlein(dispatch) {
const c = Command(dispatch),
		g = GameState(dispatch);
let enabled = true;
let rejuvId = 149644
c.add('shitzerker', () => {
enabled = !enabled
c.message(`unlein is now ${enabled ? 'enabled' : 'disabled'}.`)})
c.add('setpot', (chat) => {
var regexId = /#(\d*)@/;
var id = chat.match(regexId);
if (id){rejuvId = parseInt(id[1])}
c.message(`potion set to ` + rejuvId)})
dispatch.hook('S_ABNORMALITY_BEGIN', 2, (event) => {
if(!enabled) return;
if(event.id === 401705 && g.me.is(event.target))
dispatch.toServer('C_USE_ITEM', 3, {
gameId: g.me.gameId,
id: rejuvId,
amount: 1,
unk4: true
})
})
}