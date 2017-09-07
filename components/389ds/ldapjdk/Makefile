#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2017, cgrzemba@opencsw.org
#

COMPONENT_NAME=         ldapjdk
COMPONENT_VERSION=      4.19
COMPONENT_PROJECT_URL=  http://developer.mozilla.org
# COMPONENT_ARCHIVE_HASH= \
#     sha256:228c03d560328c82671ea3cfb2dad9dc0f16b100cfa024d0555e8658e94e4137
# COMPONENT_ARCHIVE = $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.bz2
# COMPONENT_ARCHIVE_URL=  http:///$(COMPONENT_ARCHIVE)
COMPONENT_SRC = $(COMPONENT_NAME)-$(HG_REV)
COMPONENT_BUGDB=
COMPONENT_ANITYA_ID=
TPNO = 9999

HG_REV=c07685b0f90a
HG_REPO=https://hg.mozilla.org/projects/ldap-sdks
HG_HASH = sha256:4b782fb782558ec6462fe894d0b0e6614284b78828eaf67b304e5d2bb1b8f957

COPYRIGHTS = MPL
COPYRIGHT_FILE = COPYING

BUILD_BITS= NO_ARCH
include ../../../make-rules/shared-macros.mk

BUILD_STYLE= justmake
include $(WS_TOP)/make-rules/common.mk


COMPONENT_PRE_BUILD_ACTION = \
        ($(CLONEY) $(SOURCE_DIR) $(@D))

COMPONENT_INSTALL_ACTION = true

COMPONENT_POST_INSTALL_ACTION = \
	(  ginstall -d $(PROTOUSRSHARELIBDIR)/java ; \
	gcp -fp $(@D)/java-sdk/dist/packages/ldapjdk.jar $(PROTOUSRSHARELIBDIR)/java  )

COMPONENT_BUILD_ACTION = true
COMPONENT_POST_BUILD_ACTION = \
	( cd $(@D)/java-sdk && gmake -f ldap.mk MOZ_SRC=. JAVA_VERSION=1.7 all basepackage; )
