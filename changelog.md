# Void List Changelog

## [unreleased]

## [1.0.0] - 13-01-2022

### Added
- List
- Example usage

## [1.0.1] - 13-01-2022

### Added
- Example in the readme

## [1.0.2] - 13-01-2022

### Fixed
- Example now use index instead of the name to remove

## [1.0.3] - 25-01-2022

### Added
- Sorting(use the internal array `[].sort()`)
- Map

## [1.0.6] - 25-01-2022

### Added
- Typescript Typings
- `forEach` and `filter`.

## [1.0.7] - 27-06-2022

### Added
- `empty()`.

### Changed
- `map` no longer call `[].map()` in the code

## [1.0.8] - 28-06-2022

### Added
- `containAll(list)` => Check if a list is contained in this one.
- `set(index, value)` => Set the value at that index.
- `indexOf(value)` => Returns the index of the first occurrence of a value in a list, or -1 if it is not present.
- `shuffle()` => Shuffle the list using a Fisher–Yates shuffle algorithm.

### Changed
- deprecated `empty` and renamed it to `isEmpty`

## [1.0.9] 30-06-2022

### Added
- `copy()` => Create a copy of the list.
- `join(seperator)` => Adds all the elements of an list into a string, separated by the specified separator string.
- `shift()` => Remove the first element in the list.
- `slice(start?, end?)` => Returns a copy of a section of an list. 
- `reverse()` => Reverses the elements in an list. Ex : a list of letter `A, B, C` would become list of `C, B, A`

### Fixed
- Fixed a crash in the map.
- Fixed a bug where `forEach` was using `(index, value, list)` for the predicate instead of `(value, index, list)`