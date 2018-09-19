{
  "targets": [{
    "target_name": "addon",
    "sources": [ "addon.cpp" ],
    "include_dirs": [
      "<!(node -e \"require('nan')\")"
    ]
  }]
}
