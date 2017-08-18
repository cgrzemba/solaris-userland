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
# Copyright (c) 2015, 2016, Oracle and/or its affiliates. All rights reserved.
#


include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		uwsgi
COMPONENT_VERSION=	2.0.13.1
COMPONENT_SRC=		$(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE=	$(COMPONENT_SRC).tar.gz
COMPONENT_ARCHIVE_HASH=	\
    sha256:2eca0c2f12ab76f032154cd147f4d5957d3195a022678d59cb507f4995a48d7f
COMPONENT_ARCHIVE_URL=	http://projects.unbit.it/downloads/$(COMPONENT_ARCHIVE)
COMPONENT_PROJECT_URL=	http://projects.unbit.it
COMPONENT_BUGDB=	

IPS_PKG_NAME = web/server/$(COMPONENT_NAME)

TPNO=			99999

include $(WS_MAKE_RULES)/prep.mk
include $(WS_MAKE_RULES)/justmake.mk
include $(WS_MAKE_RULES)/ips.mk

ASLR_MODE = $(ASLR_NOT_APPLICABLE)

BUILD_BITS = 32
BUILD_TARGET ?= $(BUILD_$(MK_BITS))
INSTALL_TARGET ?= $(INSTALL_$(MK_BITS))

COPYRIGHT_FILE = LICENSE

COMPILER = gcc
# COMPONENT_BUILD_ENV += UWSGI_PLUGIN_DIR="$(PROTO_DIR)$(CONFIGURE_LIBDIR.32)/uwsgi"
COMPONENT_BUILD_ENV += CC=$(COMPILER)
COMPONENT_BUILD_ARGS += default

COMPONENT_PRE_INSTALL_ACTION += ginstall -d $(PROTO_DIR)$(USRBINDIR);
COMPONENT_PRE_INSTALL_ACTION += ginstall -d $(PROTO_DIR)$(USRSHAREDIR)/$(COMPONENT_NAME);
COMPONENT_PRE_INSTALL_ACTION += cd $(@D) && echo ./uwsgi | cpio -pmdv $(PROTO_DIR)$(USRBINDIR) && \
	cd $(SOURCE_DIR) && find ./examples | cpio -pmdu $(PROTO_DIR)$(USRSHAREDIR)/$(COMPONENT_NAME)
COMPONENT_INSTALL_ACTION = true

REQUIRED_PACKAGES += system/library/math
REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += library/zlib
REQUIRED_PACKAGES += library/libxml2
REQUIRED_PACKAGES += library/pcre

# common targets
build:		$(BUILD_TARGET)

install: $(INSTALL_TARGET)

show-var:
	@echo var: $(BUILD_NO_ARCH)
	@echo var: $(BUILD_32)
	@echo var: $(BUILD_64)
	@echo var: $(INSTALL_TARGET)
