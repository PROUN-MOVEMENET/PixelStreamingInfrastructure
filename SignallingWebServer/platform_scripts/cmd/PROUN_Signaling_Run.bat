start run_local.bat --HttpPort=81 --StreamerPort=9001 --UseMatchmaker=true --MatchmakerAddress=192.168.6.60 --MatchmakerPort=9999 
timeout 3
start run_local.bat --HttpPort=82 --StreamerPort=9002 --UseMatchmaker=true --MatchmakerAddress=192.168.6.60 --MatchmakerPort=9999 --SFUPort=8890