package grifts

import (
	"github.com/gobuffalo/buffalo"
	"github.com/t-0-m-1-3/buffalo_blog/actions"
)

func init() {
	buffalo.Grifts(actions.App())
}
