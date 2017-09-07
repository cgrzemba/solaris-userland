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

COMPONENT_NAME=         jss
COMPONENT_VERSION=      4.4.20170501
COMPONENT_PROJECT_URL=  http://developer.mozilla.org
COMPONENT_SRC = $(COMPONENT_NAME)-$(HG_REV)
COMPONENT_BUGDB=
COMPONENT_ANITYA_ID=
TPNO = 9999

# HG_REV=17d1d7b740ca
HG_REV=73d4029d986b
HG_REPO=http://hg.mozilla.org/projects/jss
HG_HASH = sha256:d5a4626911021bd6d33e372a8b553dd37abf09bbfc8b53f8aa11099b8e08883b

COPYRIGHTS = MPL

BUILD_BITS=64

include ../../../make-rules/shared-macros.mk

BUILD_STYLE= justmake
include $(WS_TOP)/make-rules/common.mk


COMPONENT_PRE_BUILD_ACTION = \
        ($(CLONEY) $(SOURCE_DIR) $(@D)/sandbox)

COMPILER = gcc

JAVA_HOME=/usr/jdk/instances/jdk1.7.0
NSPR_INCLUDE_DIR=/usr/include/mps
NSS_INCLUDE_DIR=/usr/include/mps
NSPR_LIB_DIR=/usr/lib/mps/$(MACH64)
NSS_LIB_DIR=/usr/lib/mps/$(MACH64)
BUILD_OPT=1
RELEASE_TREE=$(@D)/release
USE_64=$(if $(filter 64,$(BUILD_BITS)),1)
USE_INSTALLED_NSPR = 1
USE_INSTALLED_NSS = 1
PKG_CONFIG_ALLOW_SYSTEM_LIBS=1
PKG_CONFIG_ALLOW_SYSTEM_CFLAGS=1
OS_REL = $(shell uname -r)
OS_TARGET = $(shell uname -m)
OS_ARCH = $(shell uname -s)
CPU_TAG ?= $(if $(filter i86pc,$(OS_TARGET)),_i86pc)
64BIT_TAG ?= _$(BITS:32=)

# COMPONENT_BUILD_ENV += JAVA_HOME=$(JAVA_HOME)
# COMPONENT_BUILD_ENV += NSPR_INCLUDE_DIR
# COMPONENT_BUILD_ENV += NSS_INCLUDE_DIR
# COMPONENT_BUILD_ENV += NSPR_LIB_DIR
# COMPONENT_BUILD_ENV += NSS_LIB_DIR
# COMPONENT_BUILD_ENV += BUILD_OPT
# COMPONENT_BUILD_ENV += USE_64
INSTALL_EXPORTS += JAVA_HOME
INSTALL_EXPORTS += NSPR_INCLUDE_DIR
INSTALL_EXPORTS += NSS_INCLUDE_DIR
INSTALL_EXPORTS += NSPR_LIB_DIR
INSTALL_EXPORTS += NSS_LIB_DIR
INSTALL_EXPORTS += BUILD_OPT
INSTALL_EXPORTS += RELEASE_TREE
INSTALL_EXPORTS += USE_64
INSTALL_EXPORTS += USE_INSTALLED_NSPR
INSTALL_EXPORTS += USE_INSTALLED_NSS
INSTALL_EXPORTS += PKG_CONFIG_ALLOW_SYSTEM_LIBS
INSTALL_EXPORTS += PKG_CONFIG_ALLOW_SYSTEM_CFLAGS

COMPONENT_PRE_BUILD_ACTION = \
        ($(CLONEY) $(SOURCE_DIR) $(@D)/sandbox/jss; \
	cd $(@D)/sandbox/jss/coreconf/nsinstall && PATH="$(PATH):$(SPRO_VROOT)/bin" gmake BUILD_OPT=$(BUILD_OPT) USE_64=$(USE_64))

COMPONENT_BUILD_ARGS = -C sandbox/jss all $(foreach VAR,$(INSTALL_EXPORTS),$(VAR)="$($(VAR))")
COMPONENT_BUILD_ENV += PATH=$(PATH):$(SPRO_VROOT)/bin
# COMPONENT_BUILD_TARGETS = release

COMPONENT_INSTALL_ACTION = \
	ginstall -d $(PROTOUSRSHARELIBDIR)/java ; \
	gcp -fp $(@D)/sandbox/dist/xpclass.jar $(PROTOUSRSHARELIBDIR)/java/jss4.jar  ; \
	ginstall -d $(PROTOUSRLIBDIR)/mps/$(MACH64); \
	gcp -fp $(@D)/sandbox/dist/SunOS$(OS_REL)$(CPU_TAG)_$(if $(filter 1,$(USE_64)),64_)OPT.OBJ/lib/libjss4.so $(PROTOUSRLIBDIR)/mps/$(MACH64)

REQUIRED_PACKAGES += library/security/nss
REQUIRED_PACKAGES += library/nspr
REQUIRED_PACKAGES += developer/java/jdk-7
REQUIRED_PACKAGES += system/core-os


