start run_local.bat --HttpPort=81 --StreamerPort=9001 --UseMatchmaker=true --MatchmakerAddress=193.106.172.94 --MatchmakerPort=9999 
timeout 3
start run_local.bat --HttpPort=82 --StreamerPort=9002 --UseMatchmaker=true --MatchmakerAddress=193.106.172.94 --MatchmakerPort=9999 --SFUPort=8890