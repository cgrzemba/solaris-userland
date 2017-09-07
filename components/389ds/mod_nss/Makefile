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

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		mod_nss
COMPONENT_VERSION=	1.0.14
COMPONENT_PROJECT_URL=	http://pagure.io/$(COMPONENT_NAME)
COMPONENT_ARCHIVE_HASH= \
    sha256:b5d148314d28dc47028b22944769de26fb553f08888d3f9a41e3621f4bcfb16c
COMPONENT_ARCHIVE = $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.gz
COMPONENT_ARCHIVE_URL=	http://releases.pagure.org/$(COMPONENT_NAME)/$(COMPONENT_ARCHIVE)
COMPONENT_BUGDB=	
COMPONENT_ANITYA_ID=	

TPNO=			9999
# GIT_REPO = https://pagure.io/$(COMPONENT_NAME).git
# GIT_COMMIT_ID = fe74ab6

BUILD_BITS= 64
include ../../../make-rules/shared-macros.mk

COMPONENT_INSTALL_TARGETS = install-data

COMPONENT_POST_INSTALL_ACTION =  \
	( ginstall -d  $(PROTOUSRDIR)/apache2/2.4/libexec; \
	ginstall -d  $(PROTOUSRDIR)/apache2/2.4/bin; \
	ginstall -d  $(PROTOETCDIR)/apache2/2.4/samples-conf.d; \
	ginstall -m 644 $(@D)/.libs/libmodnss.so $(PROTOUSRDIR)/apache2/2.4/libexec; \
	ginstall -m 644 $(@D)/nss.conf $(PROTOETCDIR)/apache2/2.4/samples-conf.d; \
	ginstall -m 755 $(@D)/nss_pcache $(PROTOUSRDIR)/apache2/2.4/bin  )

BUILD_STYLE = configure
include $(WS_MAKE_RULES)/common.mk

# studio_C99MODE= $(studio_C99_ENABLE)
# CPPFLAGS += "-DFALSE_SHARING_ALIGN=64"
CPPFLAGS += "-I/usr/apr-util/1.5/include"

# uses  __atomic_add_fetch_8
COMPILER = gcc

CONFIGURE_OPTIONS += --with-nss-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nss-inc=$(USRINCDIR)/mps
CONFIGURE_OPTIONS += --with-nspr-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nspr-inc=$(USRINCDIR)/mps
CONFIGURE_OPTIONS += --with-apr-config
CONFIGURE_OPTIONS += --with-apxs=/usr/apache2/2.4/bin/apxs

# COMPONENT_PRE_CONFIGURE_ACTION = \
# 	($(CLONEY) $(SOURCE_DIR) $(@D))

COMPONENT_PREP_ACTION = (cd $(@D) ; \
	aclocal --force; libtoolize --copy --force; \
 	autoconf -f; \
 	autoheader --force; \
	automake --add-missing --copy --force-missing)


REQUIRED_PACKAGES += library/security/nss
REQUIRED_PACKAGES += library/nspr
REQUIRED_PACKAGES += web/server/apache-24
REQUIRED_PACKAGES += library/apr-util-13

