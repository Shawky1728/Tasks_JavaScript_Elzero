let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? => matches "http" or "https"

// \/ => matches the forward slash character "/"

// (?:[-\w]+\.)? => matches an optional subdomain (e.g., "www." or "blog.") followed by a dot

// ([-\w]+) => matches the main domain name (e.g., "example")

// \.\w+ => matches the top-level domain (e.g., ".com" or ".org")

// (?:\.\w+)? => matches an optional second-level domain (e.g., ".co.uk")

// \/?.* => matches an optional forward slash followed by any characters (e.g., "/path/to/resource")

// The "i" flag at the end makes the regex case-insensitive, allowing it to match URLs regardless of letter case.