const Fixtures = function() {
  this.message = { type: 'message',
                   channel: 'CCCC123',
                   user: 'U1329DABEARS',
                   text: 'Does anyone know what the CPC was for our latest campaign?',
                   ts: '1480717579.000045',
                   team: 'T132ABCD'
                }

  this.messageFromRoz = { type: 'message',
                          channel: 'CCCC123',
                          user: 'IAMROZ',
                          text: 'Does anyone know what the CPC was for our latest campaign?',
                          ts: '1480717579.000045',
                          team: 'T132ABCD'
                        }

  this.textOne = 'Does anyone know what the CPC was for our latest campaign?'
  this.textTwo = 'That post was horribel?! TL;DR'

  this.userRoz = { id: 'IAMROZ',
                   team_id: 'T132NMLJV',
                   name: 'roz',
                   deleted: false,
                   status: null,
                   color: 'e96699',
                   real_name: 'Mrs Jones',
                   tz: null,
                   tz_label: 'Pacific Standard Time',
                   tz_offset: -28800,
                   profile:
                   { bot_id: 'B359HD02C',
                     api_app_id: '',
                     always_active: false,
                     avatar_hash: '908296236bcb',
                     image_24: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_24.jpg',
                     image_32: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_32.jpg',
                     image_48: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_48.jpg',
                     image_72: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_72.jpg',
                     image_192: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_192.jpg',
                     image_512: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_512.jpg',
                     image_1024: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_512.jpg',
                     image_original: 'https://avatars.slack-edge.com/2016-11-23/109279861654_908296236bcb97a2d076_original.jpg',
                     first_name: 'Mrs',
                     last_name: 'Jones',
                     title: 'Defines and Stops Excessive Acronym Use ',
                     real_name: 'Mrs Jones',
                     real_name_normalized: 'Mrs Jones',
                     fields: null },
                   is_admin: false,
                   is_owner: false,
                   is_primary_owner: false,
                   is_restricted: false,
                   is_ultra_restricted: false,
                   is_bot: true,
                   presence: 'away'
                 }

  this.channels = [ { id: 'C13FS65L7',
    name: 'blog-team',
    is_channel: true,
    created: 1461599728,
    creator: 'U1329LYLE',
    is_archived: false,
    is_general: false,
    has_pins: false,
    is_member: false },
  { id: 'C132FHHBJ',
    name: 'general',
    is_channel: true,
    created: 1461351622,
    creator: 'U1329LYLE',
    is_archived: false,
    is_general: true,
    has_pins: false,
    is_member: true,
    last_read: '1461599669.000002',
    latest:
     { type: 'message',
       user: 'U1329LYLE',
       text: 'lolz',
       ts: '1480720978.000047' },
    unread_count: 1000,
    unread_count_display: 1000,
    members:
     [ 'U1329LYLE',
       'U132GC2RE',
       'U132GD0P2',
       'U133BUY56',
       'U13FXK16D',
       'U359HD0NL' ],
    topic:
     { value: 'Company-wide announcements and work-based matters',
       creator: '',
       last_set: 0 },
    purpose:
     { value: 'This channel is for team-wide communication and announcements. All team members are in this channel.',
       creator: '',
       last_set: 0 } },
  { id: 'C132H0J8P',
    name: 'random',
    is_channel: true,
    created: 1461351622,
    creator: 'U1329LYLE',
    is_archived: false,
    is_general: false,
    has_pins: false,
    is_member: false } ]
}

module.exports = Fixtures;
